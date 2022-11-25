const objects = document.querySelectorAll("object");


for (let i = 0; i < objects.length; i++)
{
    // Anything with "load" as the first parameter in classList is assumed to be loaded.
    if (objects[i].classList.contains("load") && objects[i].classList[0] === "load")
    {
        // I HATE CORS POLICY
    }
}