// Contar cuantos números impares tiene el siguiente array
let nums=[1,5,6,4,2,1,6,9]
let contador=0;
for(i=0; i<nums.length; i++){
    if(nums[i]% 2 !==0){
        contador=contador+1;
    }
    
}
console.log("extien "+contador+" numeros impares");