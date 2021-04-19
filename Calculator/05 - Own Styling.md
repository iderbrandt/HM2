# 05 - Own Styling

Use CSS to create a more beautiful page:

![](img/05.png)

You may use the following HTML:

    <div class="calc-row">
        <input id="num1" type="text" />
        <div class="operator operator-add">+</div>
        <input id="num2" type="text" />
        <button onclick="calculate('+', 'num1', 'num2','result')">=</button>
        <div class="result" id="result"></div>
    </div>

    <div class="calc-row">
        <input id="num3" type="text" />
        <div class="operator operator-sub">-</div>
        <input id="num4" type="text" />
        <button onclick="calculate('-', 'num3', 'num4','result2')">=</button>
        <div class="result" id="result2"></div>
    </div>


## Hint

Use grid or flexbox:
- https://www.w3schools.com/css/css_grid.asp
- https://www.w3schools.com/css/css3_flexbox.asp

Investigate these CSS-properties:

    margin
    padding
    border
    font-family
    font-size
    display
    grid-template-columns
    text-align