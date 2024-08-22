export default `
uniform sampler2D texture1;
varying vec2 uvu;
uniform float parameter;
    void main(){
        // vec4 pixel = gl_FragCoord;
        // gl_FragColor = vec4(sin(pixel.x + 0.2)*parameter , cos(pixel.x + 0.2)*parameter,sin(pixel.x + 0.2)*parameter, 1.0);

        gl_FragColor = texture(texture1 , uvu);
        gl_FragColor.r = sin(parameter);
        gl_FragColor.g = cos(parameter);
    }

`