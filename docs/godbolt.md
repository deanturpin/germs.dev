---
tags:
  - development-tools
  - cpp
  - compilers
  - online-tools
---

# Godbolt

<iframe width="770px" height="1000px" src="https://godbolt.org/e#g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:c%2B%2B,selection:(endColumn:44,endLineNumber:12,positionColumn:44,positionLineNumber:12,selectionStartColumn:44,selectionStartLineNumber:12,startColumn:44,startLineNumber:12),source:'%23include+%3Cgtest/gtest.h%3E%0A%0A%23include+%3Crange/v3/all.hpp%3E%0A%0ATEST(RangeV3,+Sort)+%7B%0A++++std::array%3Cint,+5%3E+data%7B0,+1,+2,+3,+4%7D%3B%0A++++ranges::sort(data)%3B%0A++++EXPECT_EQ(data%5B0%5D,+0)%3B%0A%7D%0A%0Aint+main(int+argc,+char*+argv%5B%5D)+%7B%0A++++::testing::InitGoogleTest(%26argc,+argv)%3B%0A++++return+RUN_ALL_TESTS()%3B%0A%7D%0A'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:100,l:'4',n:'0',o:'',s:0,t:'0')),version:4"></iframe>
