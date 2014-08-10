#pragma strict

private var player : playerMove;

function Start() {
	player = FindObjectOfType(typeof(playerMove));
}

static var lineMaterial : Material;
static function CreateLineMaterial() {
	if( !lineMaterial ) {
		lineMaterial = new Material( "Shader \"Lines/Colored Blended\" {" +
			"SubShader { Pass { " +
			"    Blend SrcAlpha OneMinusSrcAlpha " +
			"    ZWrite Off Cull Off Fog { Mode Off } " +
			"    BindChannels {" +
			"      Bind \"vertex\", vertex Bind \"color\", color }" +
			"} } }" );
		lineMaterial.hideFlags = HideFlags.HideAndDontSave;
		lineMaterial.shader.hideFlags = HideFlags.HideAndDontSave;
	}
}

function OnPostRender() {
	CreateLineMaterial();
	// set the current material
	lineMaterial.SetPass(0);
	GL.Begin(GL.LINES);
	GL.Color(Color.green);
	GL.Vertex(player.transform.position);
	GL.Vertex(player.destination);
	GL.End();
}