# 08 - Modular (extra)

This HTML:

    <body>

        <div class="container">

            <h2>Calculators</h2>
            <div id="aaa">
            </div>

            <h2>Calculators</h2>
            <div id="bbb">
            </div>

        </div>

        <script src="08.js"></script>
        
        <script>
            insertCalculators("aaa", ["+", "-", "-"])
            insertCalculators("bbb", ["+", "+", "-", "+"])
        </script>

    </body>


...should give:

![](img/08.png)



