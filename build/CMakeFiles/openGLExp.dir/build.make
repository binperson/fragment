# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/CMake.app/Contents/bin/cmake

# The command to remove a file.
RM = /Applications/CMake.app/Contents/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/maxwell/CLionProjects/openGLExp

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/maxwell/CLionProjects/openGLExp/build

# Include any dependencies generated for this target.
include CMakeFiles/openGLExp.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/openGLExp.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/openGLExp.dir/flags.make

CMakeFiles/openGLExp.dir/main.cpp.o: CMakeFiles/openGLExp.dir/flags.make
CMakeFiles/openGLExp.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/maxwell/CLionProjects/openGLExp/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/openGLExp.dir/main.cpp.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/openGLExp.dir/main.cpp.o -c /Users/maxwell/CLionProjects/openGLExp/main.cpp

CMakeFiles/openGLExp.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/openGLExp.dir/main.cpp.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/maxwell/CLionProjects/openGLExp/main.cpp > CMakeFiles/openGLExp.dir/main.cpp.i

CMakeFiles/openGLExp.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/openGLExp.dir/main.cpp.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/maxwell/CLionProjects/openGLExp/main.cpp -o CMakeFiles/openGLExp.dir/main.cpp.s

# Object files for target openGLExp
openGLExp_OBJECTS = \
"CMakeFiles/openGLExp.dir/main.cpp.o"

# External object files for target openGLExp
openGLExp_EXTERNAL_OBJECTS =

openGLExp: CMakeFiles/openGLExp.dir/main.cpp.o
openGLExp: CMakeFiles/openGLExp.dir/build.make
openGLExp: /usr/local/Cellar/glew/2.1.0_1/lib/libGLEW.2.1.dylib
openGLExp: /usr/local/Cellar/glfw/3.3.2/lib/libglfw.3.dylib
openGLExp: CMakeFiles/openGLExp.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/maxwell/CLionProjects/openGLExp/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable openGLExp"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/openGLExp.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/openGLExp.dir/build: openGLExp

.PHONY : CMakeFiles/openGLExp.dir/build

CMakeFiles/openGLExp.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/openGLExp.dir/cmake_clean.cmake
.PHONY : CMakeFiles/openGLExp.dir/clean

CMakeFiles/openGLExp.dir/depend:
	cd /Users/maxwell/CLionProjects/openGLExp/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/maxwell/CLionProjects/openGLExp /Users/maxwell/CLionProjects/openGLExp /Users/maxwell/CLionProjects/openGLExp/build /Users/maxwell/CLionProjects/openGLExp/build /Users/maxwell/CLionProjects/openGLExp/build/CMakeFiles/openGLExp.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/openGLExp.dir/depend

