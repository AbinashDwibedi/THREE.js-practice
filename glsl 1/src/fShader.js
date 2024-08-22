export default `
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;
varying vec2 uvu;
uniform float parameter;
    void main(){
        vec4 pixel = gl_FragCoord;
        // gl_FragColor = vec4(sin(pixel.x + 0.2)*parameter , cos(pixel.x + 0.2)*parameter,sin(pixel.x + 0.2)*parameter, 1.0);

        // gl_FragColor = texture(texture1 , uvu);
        vec4 image1 = texture(texture1, uvu);
        vec4 image2 = texture(texture2, uvu);
        vec4 image3 = texture(texture3, uvu);
        // gl_FragColor = mix(image1 , image2, sin(parameter) );
        gl_FragColor = image1;
        gl_FragColor.r += sin(parameter);
        gl_FragColor.g += cos(parameter);
        gl_FragColor.b += sin(parameter);
    }

`