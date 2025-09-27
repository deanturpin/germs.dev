# OpenGL

# Fundamentals
- https://en.wikipedia.org/wiki/Texel_(graphics)

# Terminology
- Identity matrix
- [A Pixel Is Not A Little Square](http://alvyray.com/Memos/CG/Microsoft/6_pixel.pdf)

# OpenGL Shading Language -- GLSL
Excerpts from [Wikipedia](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language).

### Variable types
C has a number of basic types. GLSL uses some of these, but adds many more.

## Type qualifiers
GLSL's uses a large number of qualifiers to specify where the values that
various variables contain come from. Qualifiers also modify how those variables
can be used.

## Interface blocks
Certain variable definitions can be grouped into interface blocks. These can be
used to make communication between different shader stages easier, or to allow
storage for variables to come from a buffer object.

## Predefined variables
The different shader stages have a number of predefined variables for them.
These are provided by the system for various system-specific use.

## Uniforms
Uniforms in GLSL are shader variables that are set from user code, but only are
allowed to change between different glDraw* calls. Uniforms can be queried and
set by the code external to a particular shader. Uniforms can be arranged into
blocks, and the data storage for these blocks can come from buffer objects.

## Samplers
Samplers are special types which must be defined as uniforms. They represent
bound textures in the OpenGL context. They are set like integer, 1D uniform
values.

# Interpolation
- https://www.cambridgeincolour.com/tutorials/image-interpolation.htm
- https://www.codeproject.com/Articles/236394/Bi-Cubic-and-Bi-Linear-Interpolation-with-GLSL
- https://blog.demofox.org/2015/08/15/resizing-images-with-bicubic-interpolation/
- https://www.youtube.com/watch?v=PO6xtSxB5Vg
- http://www.mate.tue.nl/mate/pdfs/10318.pdf
- http://sepwww.stanford.edu/public/docs/sep135/chap3.pdf
- https://stackoverflow.com/questions/13501081/efficient-bicubic-filtering-code-in-glsl
- https://en.wikipedia.org/wiki/Bicubic_interpolation#/media/File:Comparison_of_1D_and_2D_interpolation.svg
- https://en.wikipedia.org/wiki/Spline_interpolation
- https://stackoverflow.com/questions/12363463/when-should-i-set-gl-texture-min-filter-and-gl-texture-mag-filter

## Shaders
- https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language
- https://www.shadertoy.com/view/XtlGW4#
- https://shaderfrog.com/app/view/5188#
- http://shader-playground.timjones.io/

