var countDownDate = new Date("Jun 5, 2019 15:37:25").getTime();
				
				// Update the count down every 1 second
					var x = setInterval(function() {
				
					// Get todays date and time
					var now = new Date().getTime();
					
					// Find the distance between now and the count down date
					var distance = countDownDate - now;
					
					// Time calculations for days, hours, minutes and seconds
					var days = Math.floor(distance / (1000 * 60 * 60 * 24));
					var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);
					
					// Output the result in an element with id="demo"
					document.getElementById("hari").innerHTML = days;
					document.getElementById("jam").innerHTML = hours;
					document.getElementById("menit").innerHTML = minutes;
					document.getElementById("detik").innerHTML = seconds;
				
					}, 1000);