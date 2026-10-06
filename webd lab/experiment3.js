const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f2f2f2;
        }

        .container {
            width: 400px;
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        h2 {
            text-align: center;
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 6px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
        }

        input:focus {
            outline: none;
            border-color: #007bff;
        }

        button {
            width: 100%;
            padding: 11px;
            margin-top: 5px;
            border: none;
            border-radius: 5px;
            background: #007bff;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #0056b3;
        }

        #messageBox {
            margin-bottom: 15px;
            font-size: 14px;
            display: none;
            text-align: center;
        }

        .error {
            color: red;
        }

        .success {
            color: green;
        }
    </style>
</head>

<body>

    <div class="container">

        <h2>Register</h2>

        <form id="registrationForm">

            <div id="messageBox"></div>

            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </div>

            <div class="form-group">
                <label for="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" required>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" required>
            </div>

            <div class="form-group">
                <label for="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" required>
            </div>

            <button type="submit">Register</button>

        </form>

    </div>

    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {

            event.preventDefault();

            const mobile = document.getElementById('mobile').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            const messageBox = document.getElementById('messageBox');

            const mobileRegex = /^[0-9]{10}$/;

            if (!mobileRegex.test(mobile)) {
                messageBox.textContent = "Please enter a valid 10-digit mobile number.";
                messageBox.className = "error";
                messageBox.style.display = "block";
                return;
            }

            if (password.length < 6) {
                messageBox.textContent = "Password must be at least 6 characters long.";
                messageBox.className = "error";
                messageBox.style.display = "block";
                return;
            }

            if (password !== confirmPassword) {
                messageBox.textContent = "Passwords do not match. Please try again.";
                messageBox.className = "error";
                messageBox.style.display = "block";
                return;
            }

            messageBox.textContent = "Registration successful!";
            messageBox.className = "success";
            messageBox.style.display = "block";

        });
    </script>

</body>
</html>
    `);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});