export default `
    attribute float random;
    varying vec3 f_normal;
    void main(){
        // vec4 translated = vec4(position, 1.0) + vec4(0,2,0,0);
        // vec4 scaled = vec4(position, 1.0) * vec4(2.0 , 2.0 ,2.0 ,1.0);
        // gl_Position = projectionMatrix * modelViewMatrix * translated;
                // gl_Position = projectionMatrix * modelViewMatrix * scaled;
    f_normal = normal;
    // vec4 randomPosition = 
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position * clamp(random , 0.0 , 1.0) , 1.0);
        
    }
`