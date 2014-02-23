#pragma strict

var destination : Vector3;

// function to rotate the sprite to face a destination
function faceDestination(destination : Vector3) : Quaternion{
    var delta = destination - transform.position;
    var theta = Mathf.Atan2(delta.y, delta.x) * Mathf.Rad2Deg;
    return Quaternion.Euler(Vector3(0, 0, theta));
}

// fuction to easily get mouse position in game space coordinates
function getMouseWorldPosition() : Vector3 {
	var position = Input.mousePosition;

	// adjust by camera's z position
	position.z = Camera.main.transform.localPosition.z * -1;

	return Camera.main.ScreenToWorldPoint(position);
}

function Update () {
	// handle right clicks
	if (Input.GetMouseButtonDown(0)) {
	}

	// handle right clicks
	if (Input.GetMouseButtonDown(1)) {
		// set destination
		destination = getMouseWorldPosition();

        // move the ship
        transform.rotation = faceDestination(destination);
        transform.position = destination;
	}
}
