export function changeClass(input,inputLabel,inputFrame){
    input.addEventListener('focus', function(){
        inputLabel.classList.remove('disabled');
        inputLabel.classList.add('label');
        inputFrame.classList.remove('input_frame');
        inputFrame.classList.add('input_frame_active');
        input.removeAttribute("placeholder");
        
    });
}