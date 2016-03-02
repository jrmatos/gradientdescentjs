// Gradient Descent for Linear Regression with one feature

// training set
var ts = [
			{ x: 2.09, y: 4.51 },
			{ x: 5.57, y: 5.60 },
			{ x: 4.12, y: 4.35 },
			{ x: 2.99, y: 15.49 },
			{ x: 5.57, y: 10.99 }
		],
		theta0 = 0,
		theta1 = 0,
		lr = 0.001; // learning rate

function hypothesis(x) { return theta0 + theta1 * x }

var gradientDescent = (function() {

	var converged = false,
		temp0 = 0,
		temp1 = 0,
		dtheta0 = 0,
		dtheta1 = 0,
		iterations = 0
		m = ts.length;

	// while not converged
	while(!converged) {

		iterations++;

		// partial derivatives of theta0 and theta1
		dtheta0 = ts.reduce(function(prev, curr){ return prev +  (hypothesis(curr.x) -  curr.y); }, 0);
		dtheta1 = ts.reduce(function(prev, curr){ return prev +  (hypothesis(curr.x) -  curr.y) * curr.x; }, 0);

		temp0 = theta0 - lr * dtheta0; 
		temp1 = theta1 - lr * dtheta1; 

		// if the differences between the old and the new values are too small
		// then it converged
		if(Math.abs(temp0 - theta0) < 1e-3 && Math.abs(temp1 - theta1) < 1e-3) {
			converged = true;
			console.log('converged!!!');
			console.log('iterations: ' + iterations);
			console.log('theta0: ' + theta0);
			console.log('theta1: ' + theta1);
			console.log('f(x) = ('+theta0.toFixed(2)+') + ('+ theta1.toFixed(2) + ')x');
		}
		else {
			theta0 = temp0;
			theta1 = temp1;				
		}

	}

})();
