#pragma strict

public var rotation_speed : float;
public var movement_speed : float;

var destination : Vector3;
var destination_rotation : float;
var rotation_direction : int;

// function to normalize a degrees angle to be between 0 and 360.
function normalizeAngle(theta : float) : float {
	// negative angles
	while (theta < 0) {
		theta += 360;
	}
	
	// remove revolutions
	while (theta > 360) {
		theta -= 360;
	}
	return theta;
}

// function to rotate the sprite to face a destination
function angleToDestination(destination : Vector3) : float {
    var delta = destination - transform.position;
    var theta = Mathf.Atan2(delta.y, delta.x) * Mathf.Rad2Deg;
	return normalizeAngle(theta);
    //return Quaternion.Euler(Vector3(0, 0, theta));
}

// fuction to easily get mouse position in game space coordinates
function getMouseWorldPosition() : Vector3 {
	var position = Input.mousePosition;

	// adjust by camera's z position
	position.z = Camera.main.transform.localPosition.z * -1;

	return Camera.main.ScreenToWorldPoint(position);
}

function Update () {
	var theta : float;
	
	// handle right clicks
	if (Input.GetMouseButtonDown(0)) {
	}

	// handle right clicks
	if (Input.GetMouseButtonDown(1)) {
		// set destination
		this.destination = getMouseWorldPosition();
		this.destination_rotation = angleToDestination(destination);
		this.rotation_direction = 0;
        //transform.rotation = Quaternion.Euler(0, 0, destination_rotation);
        this.transform.position = destination;
	}
	 
	// move the sprite smoothly
	theta = destination_rotation - this.transform.rotation.eulerAngles.z;
	theta = normalizeAngle(theta);
	if (theta) {
		// normalize the angle
		
		if (!this.rotation_direction) {
			if (theta < 180) {
				// right
				this.rotation_direction = 1;
			} else {
				// left
				this.rotation_direction = -1;
			}
		}
	
		// rotate at full speed unless that would overshoot
		if (Mathf.Abs(theta) > this.rotation_speed) {
			theta = this.rotation_speed;
			theta = normalizeAngle(this.transform.rotation.eulerAngles.z + (theta * this.rotation_direction));
		} else {
			theta = this.destination_rotation;
			this.rotation_direction = 0;
		}
		
		// fire thrusters!
		this.transform.rotation = Quaternion.Euler(0, 0, theta);
		if (this.rotation_direction == 0) {
			this.destination_rotation = this.transform.rotation.eulerAngles.z;
		}
	} 
	
	
}
