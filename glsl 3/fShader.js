export default `
    varying vec3 f_normal;
    void main(){
        vec3 lightPosition = vec3(0,0,1);
        
        float dt = clamp(dot(lightPosition , f_normal) , 0.0, 1.0);
        vec3 color;
        if(dt>0.5){
            vec3 lightColor = vec3(1.0 , 0.0 , 1.0);
            color = lightColor *dt;
        }
            else {
            vec3 lightColor = vec3(0.0 , 1.0 , 1.0);
            color = lightColor * dt;
            }
        gl_FragColor = vec4(color,1.0);
    }
`