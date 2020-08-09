cmake_minimum_required(VERSION 3.15)
project(openGLExp)

set(CMAKE_CXX_STANDARD 11)

# 添加头文件
set(GLEW_H ./glew/2.1.0_1/include/GL)
set(GLFW_H ./glfw/3.3.2/include/GLFW)
include_directories(${GLEW_H} ${GLFW_H})
link_directories(${GLEW_H} ${GLFW_H})

# 添加目标链接
set(GLFW_LINK /Users/binperson/Documents/clionprojects/openGLExp/glfw/3.3.2/lib/libglfw.dylib)
set(GLEW_LINK /Users/binperson/Documents/clionprojects/openGLExp/glew/2.1.0_1/lib/libGLEW.dylib)
link_libraries(${GLEW_LINK} ${GLFW_LINK})

add_executable(openGLExp main.cpp)



if (APPLE)
    target_link_libraries(openGLExp "-framework OpenGL")
    target_link_libraries(openGLExp "-framework GLUT")
endif()