export default  `
    uniform float parameter;
    varying vec2 uvu;
    uniform sampler2D texture1;
    void main(){
        // vec4 Pixel = gl_FragCoord;
        // gl_FragColor = vec4(sin(Pixel.x) ,cos(Pixel.y),sin(Pixel.z), 1.0);

        gl_FragColor = texture(texture1 , uvu);
    }
`