    function ChangeHello() {
        document.getElementById("column1").style.color = "blue"
        const inputValue = document.getElementById("HelloChange").value;
        const heading = document.getElementById("heading1");
        if (inputValue.trim() !== "") {
            heading.textContent = inputValue;
        }
    }
    function ChangeWorld() {
        document.getElementById("column2").style.color = "green"
        const inputValue = document.getElementById("HelloWorld").value;
        const heading = document.getElementById("heading2");
        if (inputValue.trim() !== "") {
            heading.textContent = inputValue;
        }
    }