#include "glew.h"
#include "glfw3.h"
#include <iostream>
using namespace std;

void key_callback(GLFWwindow* window, int key, int scancode, int action, int mode)
{
    //如果按下ESC，把windowShouldClose设置为True，外面的循环会关闭应用
    if(key==GLFW_KEY_ESCAPE && action == GLFW_PRESS)
        glfwSetWindowShouldClose(window, GL_TRUE);
    std::cout<<"ESC"<<mode;
}

int main(void)
{
    //初始化GLFW库
    if(!glfwInit())
        return -1;
    //创建窗口以及上下文
    GLFWwindow* window = glfwCreateWindow(640, 480, "hello world", NULL, NULL);
    if(!window)
    {
        //创建失败会返回NULL
        glfwTerminate();
    }
    //建立当前窗口的上下文
    glfwMakeContextCurrent(window);

    glfwSetKeyCallback(window, key_callback); //注册回调函数
    //循环，直到用户关闭窗口
    while(!glfwWindowShouldClose(window))
    {
        /*******轮询事件*******/
        glfwPollEvents();

        /*******渲染*******/
        //选择清空的颜色RGBA
        glClearColor(0.2, 0.3, 0.3, 1);
        glClear(GL_COLOR_BUFFER_BIT);

        //开始画一个三角形
        glBegin(GL_TRIANGLES);

        GLfloat VertexColorArr1[] = {1.0f, 0.0f, 0.0f};
        glColor3fv(VertexColorArr1); //Red

        GLfloat VertexArr1[] = {0.0f, 0.0f, 0.0f};
        glVertex3fv(VertexArr1);

        GLfloat VertexColorArr2[] = {0.0f, 1.0f, 0.0f};
        glColor3fv(VertexColorArr2);

        GLfloat VertexArr2[] = {1.0f, -1.0f, 0.0f};
        glVertex3fv(VertexArr2);

        GLfloat VertexColorArr3[] = {0.0f, 0.0f, 1.0f};
        glColor3fv(VertexColorArr3);

        GLfloat VertexArr3[] = {-1.0f, -1.0f, 0.0f};
        glVertex3fv(VertexArr3);
        //结束一个画图步骤
        glEnd();


        /******交换缓冲区，更新window上的内容******/
        glfwSwapBuffers(window);
    }
    glfwTerminate();
    return 0;
}