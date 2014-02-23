#pragma strict

// fuction to easily get mouse position in game space coordinates
function getMouseWorldPosition() : Vector3 {
	var position = Input.mousePosition;

	// adjust by camera's z position
	position.z = Camera.main.transform.localPosition.z * -1;

	return Camera.main.ScreenToWorldPoint(position);
}

function Update () {
	var position: Vector3;
	var new_explosion: GameObject;

	// handle right clicks
	if (Input.GetMouseButtonDown(0)) {
	}

	// handle right clicks
	if (Input.GetMouseButtonDown(1)) {
		// get position
		position = getMouseWorldPosition();

        // move the parent
        transform.position = position;
	}

}
