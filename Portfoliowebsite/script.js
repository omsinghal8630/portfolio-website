const text = document.querySelector(".text");
const textLoad = () =>
{
    setTimeout(() =>
    {
        text.textContent = "Web Developer";
    }, 8000);
    setTimeout(() =>
    {
        text.textContent = "UI/UX Designer";
    }, 4000);
    setTimeout(() =>
    {
        text.textContent = "Web Designer";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

