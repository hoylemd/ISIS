#pragma strict

public var explosion:GameObject;

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(1)) {
		Debug.Log("click");
		if (explosion) {
			Instantiate(explosion);
		}
	}
	
	if (Input.GetMouseButtonDown(0)) {
		Debug.Log("click1");
	}
}