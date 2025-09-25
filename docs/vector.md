# How does your `std::vector` grow?

How many times is the destructor for the "fax" class called below after
populating a five element STL vector?

```cpp
std::vector<fax> y;

for (size_t i = 0; i < 5; ++i)
  y.push_back(fax());
```

Remarkably it's _17 times_!

https://godbolt.org/z/vd8GGV

For each push we call the default constructor to create a transient object and
then call the copy constructor to populate the new element with its data. So
far so good. But crucially when the vector is resized we must also copy all the
existing elements into the new container, resulting in an unexpected growth.
Not an issue for this simple case but what if the class were large?
Additionally if there's a bug in the copy constructor and pushing a new element
exceeds the underlying vector capacity then we could be corrupting existing
valid data just by quietly copying it around.

## Other ways to add elements to a vector
```cpp
#include <string>
#include <vector>

int main() {

  struct customer {
    std::string first_name_;
    std::string last_name_;
    size_t id_{};
  };

  std::vector<customer> db;

  db.emplace_back("hi", "there", 10);
  db.push_back({"bye", "now", 11});
  db.push_back(customer{"bye", "now", 11});
  db.emplace_back(customer{"bye", "now", 11});

  return db.size();
}
```

https://godbolt.org/z/bsaxrcxcT

