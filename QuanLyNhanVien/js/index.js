var employerList = [];

function createEmployer() {
  var tknv = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var datepicker = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value;
  var chucvu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value;

  var employer = new Employer(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  );

  //  Kiểm tra dữ liệu đầu vào
  // Kiểm tra rỗng
  var valid = true;

  valid &=
    kiemTraRong(employer.tknv, "#tbTKNV", "Tài Khoản") &
    kiemTraRong(employer.name, "#tbTen", "Tên") &
    kiemTraRong(employer.email, "#tbEmail", "Email") &
    kiemTraRong(employer.password, "#tbMatKhau", "Password") &
    kiemTraRong(employer.datepicker, "#tbNgay", "Ngày làm") &
    kiemTraRong(employer.luongCB, "#tbLuongCB", "Lương cơ bản") &
    kiemTraRong(employer.chucvu, "#tbChucVu", "Chức vụ") &
    kiemTraRong(employer.gioLam, "#tbGiolam", "Giờ làm");

    // kiem tra tài khoản
    if(kiemTraRong(employer.tknv, "#tbTKNV", "Tài Khoản")){
      valid &= kiemTraSo(employer.tknv, "#tbTKNV", "Tài Khoản") & kiemtraDoDai(employer.tknv, "#tbTKNV", "Tài Khoản",4, 6);
    }
    // kiem tra ten
    if(kiemTraRong(employer.name, "#tbTen", "Tên")){
      valid &= kiemTraKyTu(employer.name, "#tbTen", "Tên") ;
    }
    
    // kiem tra email
    if(kiemTraRong(employer.email, "#tbEmail", "Email")){
      valid &= kiemTraEmail(employer.email, "#tbEmail", "Email");
    }

    // kiem tra mật khẩu
    if(kiemTraRong(employer.password, "#tbMatKhau", "Password")){
      valid &= kiemTraMatKhau(employer.password, "#tbMatKhau", "Password");
    }


    // kiem tra ngày làm
    if(kiemTraRong(employer.datepicker, "#tbNgay", "Ngày làm ")){
      valid &= kiemTraNgay(employer.datepicker, "#tbNgay", "Ngày làm ");
    }



    
    // kiem tra lương CB
    if(kiemTraRong(employer.luongCB, "#tbLuongCB", "Lương cơ bản")){
      valid &= kiemTraSo(employer.luongCB, "#tbLuongCB", "Lương cơ bản") & kiemtraLuongCB(employer.luongCB, "#tbLuongCB", "Lương cơ bản", 1000000, 20000000);
    }

    // kiem tra giờ làm
    if(kiemTraRong(employer.gioLam, "#tbGiolam", "Giờ làm")){
      valid &= kiemTraSo(employer.gioLam, "#tbGiolam", "Giờ làm") & kiemtraLuongCB(employer.gioLam, "#tbGiolam", "Giờ làm", 80, 200);
    }



  if (!valid) {
    return;
  }

  // bỏ đối tượng vào danh sách
  employerList.push(employer);
  // in nv ra bảng
  renderEmployer();

  // luu thông tin vào storage
  saveLocalStorage();
}

function saveLocalStorage() {
  var employerListJSON = JSON.stringify(employerList);
  localStorage.setItem("list", employerListJSON);
}

function getLocalStorage(key) {
  //Lấy dữ liệu từ localstorage ra (dữ liệu lấy là string)
  if (localStorage.getItem(key)) {
    var str = localStorage.getItem(key);
    //Parse dữ liệu về lại object
    var ob = JSON.parse(str);
    return ob;
  }
  return undefined;
}


//đợi html js load xong thì sẽ động thực thi
window.onload = function () {
//Lấy ra array sinh viên từ localstorage gán vào employerList
employerList = getLocalStorage();
// console.log('list', employerList);
if (employerList == undefined) {
  employerList = [];
}
renderEmployer(employerList);
}



// tạo hàm in ds nhân viên ra bảng
function renderEmployer() {
  var result = "";
  for (var i = 0; i < employerList.length; i++) {
    var currentEmployer = employerList[i];
    
    result += `<tr>
                      <td>${currentEmployer.tknv}</td>
                      <td>${currentEmployer.name}</td>
                      <td>${currentEmployer.email}</td>
                      <td>${currentEmployer.datepicker}</td>
                      <td>${currentEmployer.chucvu}</td>
                      <td>${currentEmployer.tongLuong}</td>
                      <td>${currentEmployer.rank}</td>
                      <td>
                        <button class="btn btn-danger" onclick="delEmployer('${currentEmployer.tknv}')">Del</button>
                      </td>
                  </tr>`;
  }

  document.getElementById("tableDanhSach").innerHTML = result;
}

// luu thong tin nv vào storage
 


function delEmployer(idClick) { // input id: giá trị người dùng click
  //output: index    //                 0   1   2
  var indexDel = -1; // studentList = [{1},{2},{3}] studentList[2].name ='abc';
  for (var index = employerList.length - 1; index >= 0; index--) {
    //Mỗi lần duyệt lấy ra 1 phần tử của mảng so với input người dùng click
    if (employerList[index].tknv == idClick) {
      // indexDel = index; //Lưu lại vị trí id click = sinhVien có mã trùng với idClick
      // break; //thoát ra khỏi vòng lặp
      employerList.splice(index, 1);
    }
  }
  renderEmployer(employerList);
}
