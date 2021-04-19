# 04 - Refactor

The **sum** and **subtract** functions are very similar.

Delete them and create a more generic function **calculate**

In the HTML code, add **id** to elements and type, for example, as follows:

    <div>
        <input id="num1" type="text" />
        +
        <input id="num2" type="text" />
        <button onclick="calculate('+', 'num1', 'num2','result')">=</button>
        <span id="result"></span>
    </div>


Create a calulate function that takes four parameters:

    function calculate(operation, num1Id, num2Id, resultId) {
    }


