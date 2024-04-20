#include <iostream>
bool gameOver;
const int window_width = 20;
const int window_height = 20;
void Setup()
{
    gameOver = false;
}
void Draw()
{

}
void Input()
{

}
void Logic()
{

}

int main()
{
    Setup();
    while (!gameOver)
    {
        Draw();
        Input();
        Logic();
        // Sleep(10)
    }
    std::cout << "Hello World!\n";
}

