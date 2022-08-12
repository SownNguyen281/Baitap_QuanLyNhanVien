function kiemTraRong(value,selectorError,name){
    
        var valid = true;
        if(value === ''){
            document.querySelector(selectorError).innerHTML = name + " ko được bỏ trống !";
            return false;
          }
            document.querySelector(selectorError).innerHTML = '';
            return true;
    
    }


    function kiemTraKyTu(value,selectorError,name){
        var regex = /^[a-zA-Z]+$/;
        if(regex.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
    
            document.querySelector(selectorError).innerHTML = name + ' chỉ có ký tự';
            return false;
    }


    function kiemTraSo(value,selectorError,name){
        var regex = /^[0-9]+$/;
        if(regex.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
            }
        document.querySelector(selectorError).innerHTML = name + ' chỉ có số';
        return false;
    }
    

    function kiemTraMatKhau(value,selectorError,name){
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(regex.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
            }
        document.querySelector(selectorError).innerHTML = name + ' phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt) ';
        return false;
    }


    function kiemTraNgay(value,selectorError,name){
        var regex = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
        if(regex.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
            }
        document.querySelector(selectorError).innerHTML = name + ' theo kiểu mm/dd/yy ';
        return false;
    }



    function kiemtraDoDai(value,selectorError,name,minLength,maxLength){
        if(value.length > maxLength || value.length < minLength){
            document.querySelector(selectorError).innerHTML = name + " từ " + minLength + " dến " + maxLength ;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }


    function kiemtraLuongCB(value,selectorError,name,minLength,maxLength){
        if(value > maxLength || value < minLength){
            document.querySelector(selectorError).innerHTML = name + " từ " + minLength + " dến " + maxLength ;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }


    function kiemTraEmail(value,selectorError,name){
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
    
        document.querySelector(selectorError).innerHTML = name + ' ko hop le !';
        return false;
    }

