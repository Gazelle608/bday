<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy 60th Birthday Dad!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            color: white;
        }
        
        .container {
            text-align: center;
            max-width: 1000px;
            width: 100%;
            padding: 20px;
        }
        
        .main-text {
            font-size: 5rem;
            font-weight: bold;
            margin-bottom: 30px;
            text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 10;
        }
        
        .happy {
            color: #FFD700;
            display: block;
            animation: pulse 2s infinite;
        }
        
        .age {
            color: #FF4136;
            display: block;
            font-size: 8rem;
            animation: bounce 1.5s infinite alternate;
            text-shadow: 0 0 20px rgba(255, 65, 54, 0.7);
            margin: 20px 0;
        }
        
        .dad {
            color: #0074D9;
            display: block;
            animation: swing 3s infinite ease-in-out;
        }
        
        /* Balloon styles */
        .balloon {
            position: absolute;
            width: 70px;
            height: 85px;
            border-radius: 50%;
            z-index: 1;
            animation: float 15s infinite ease-in-out;
        }
        
        .balloon:before {
            content: "";
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 40px;
            background: rgba(255, 255, 255, 0.7);
        }
        
        .balloon:nth-child(1) {
            background: #FF4136;
            left: 10%;
            animation-delay: 0s;
        }
        
        .balloon:nth-child(2) {
            background: #0074D9;
            left: 20%;
            animation-delay: 1s;
        }
        
        .balloon:nth-child(3) {
            background: #2ECC40;
            left: 30%;
            animation-delay: 2s;
        }
        
        .balloon:nth-child(4) {
            background: #FFDC00;
            left: 40%;
            animation-delay: 3s;
        }
        
        .balloon:nth-child(5) {
            background: #B10DC9;
            left: 50%;
            animation-delay: 4s;
        }
        
        .balloon:nth-child(6) {
            background: #FF851B;
            left: 60%;
            animation-delay: 5s;
        }
        
        .balloon:nth-child(7) {
            background: #7FDBFF;
            left: 70%;
            animation-delay: 6s;
        }
        
        .balloon:nth-child(8) {
            background: #F012BE;
            left: 80%;
            animation-delay: 7s;
        }
        
        .balloon:nth-child(9) {
            background: #01FF70;
            left: 90%;
            animation-delay: 8s;
        }
        
        /* Confetti */
        .confetti {
            position: absolute;
            width: 12px;
            height: 12px;
            opacity: 0.7;
            animation: confettiFall 5s linear infinite;
            z-index: 1;
        }
        
        /* Cake */
        .cake-container {
            margin: 40px auto;
            position: relative;
            width: 250px;
            height: 150px;
        }
        
        .cake {
            width: 200px;
            height: 100px;
            position: absolute;
            bottom: 0;
            left: 25px;
        }
        
        .cake-base {
            width: 180px;
            height: 60px;
            background: #8B4513;
            border-radius: 10px 10px 0 0;
            position: absolute;
            bottom: 0;
            left: 10px;
        }
        
        .cake-top {
            width: 200px;
            height: 40px;
            background: #DEB887;
            border-radius: 50% 50% 0 0;
            position: absolute;
            top: 0;
        }
        
        .candle {
            width: 10px;
            height: 30px;
            background: #FFD700;
            position: absolute;
            top: -30px;
            left: 95px;
            border-radius: 5px 5px 0 0;
        }
        
        .flame {
            width: 15px;
            height: 25px;
            background: #FF4500;
            border-radius: 50% 50% 20% 20%;
            position: absolute;
            top: -55px;
            left: 92.5px;
            animation: flicker 0.5s infinite alternate;
            box-shadow: 0 0 10px #FF4500;
        }
        
        /* Animations */
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
            50% {
                transform: scale(1.05);
                text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            }
            100% {
                transform: scale(1);
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
        }
        
        @keyframes bounce {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-20px);
            }
        }
        
        @keyframes swing {
            0% {
                transform: rotate(-5deg);
            }
            50% {
                transform: rotate(5deg);
            }
            100% {
                transform: rotate(-5deg);
            }
        }
        
        @keyframes confettiFall {
            0% {
                transform: translateY(-100px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes flicker {
            0% {
                transform: scale(1) translateX(0);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.1) translateX(1px);
                opacity: 1;
            }
            100% {
                transform: scale(0.9) translateX(-1px);
                opacity: 0.9;
            }
        }
        
        /* Fireworks */
        .firework {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            animation: fireworkExplode 1.5s ease-out infinite;
            z-index: 2;
        }
        
        @keyframes fireworkExplode {
            0% {
                transform: translateY(100vh);
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                transform: translateY(0) scale(5);
                opacity: 0;
            }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .main-text {
                font-size: 3.5rem;
            }
            
            .age {
                font-size: 6rem;
            }
        }
        
        @media (max-width: 480px) {
            .main-text {
                font-size: 2.5rem;
            }
            
            .age {
                font-size: 4.5rem;
            }
            
            .cake-container {
                transform: scale(0.8);
            }
        }
    </style>
</head>
<body>
    <!-- Balloons -->
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    
    <!-- Content -->
    <div class="container">
        <div class="main-text">
            <span class="happy">Happy</span>
            <span class="age">60th</span>
            <span class="dad">Birthday Dad!</span>
        </div>
        
        <!-- Cake -->
        <div class="cake-container">
            <div class="cake">
                <div class="cake-base"></div>
                <div class="cake-top"></div>
                <div class="candle"></div>
                <div class="flame"></div>
            </div>
        </div>
    </div>
    
    <script>
        // Create confetti
        function createConfetti() {
            const colors = ['#FF4136', '#0074D9', '#2ECC40', '#FFDC00', '#B10DC9', '#FF851B', '#7FDBFF', '#F012BE'];
            
            for (let i = 0; i < 150; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Random properties
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 10 + 8;
                const left = Math.random() * 100;
                const animationDuration = Math.random() * 5 + 5;
                const animationDelay = Math.random() * 5;
                
                // Apply styles
                confetti.style.backgroundColor = color;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.left = `${left}vw`;
                confetti.style.animationDuration = `${animationDuration}s`;
                confetti.style.animationDelay = `${animationDelay}s`;
                
                // Random shape
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else {
                    confetti.style.borderRadius = '0';
                }
                
                document.body.appendChild(confetti);
            }
        }
        
        // Create fireworks
        function createFireworks() {
            setInterval(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                
                // Random properties
                const colors = ['#FF4136', '#0074D9', '#2ECC40', '#FFDC00', '#B10DC9'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const left = Math.random() * 100;
                const animationDelay = Math.random() * 2;
                
                // Apply styles
                firework.style.backgroundColor = color;
                firework.style.left = `${left}vw`;
                firework.style.animationDelay = `${animationDelay}s`;
                
                document.body.appendChild(firework);
                
                // Remove after animation
                setTimeout(() => {
                    firework.remove();
                }, 1500);
            }, 500);
        }
        
        // Initialize effects when page loads
        window.onload = function() {
            createConfetti();
            createFireworks();
        };
        
        // Add interactive burst effect on click
        document.addEventListener('click', function(e) {
            // Create a burst effect
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const burst = document.createElement('div');
                    burst.style.position = 'absolute';
                    burst.style.width = '15px';
                    burst.style.height = '15px';
                    burst.style.backgroundColor = '#FFD700';
                    burst.style.borderRadius = '50%';
                    burst.style.left = `${e.clientX}px`;
                    burst.style.top = `${e.clientY}px`;
                    burst.style.animation = `confettiFall 2s linear forwards`;
                    document.body.appendChild(burst);
                    
                    // Remove after animation
                    setTimeout(() => {
                        burst.remove();
                    }, 2000);
                }, i * 50);
            }
        });
    </script>
</body>
</html>
