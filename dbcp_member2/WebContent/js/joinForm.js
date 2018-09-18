/**
 * 
 */
	$(function(){
		$("#joinform").validate({
			errorPlacement: function(error, element){
				$(element).closest("form").find("small[id='"+element.attr("id")+"']").append(error);
			},
			rules:{
				userid:{
					required:true,
					validId:true,
					remote:{
						url:"joinProcess2.jsp",
						type:"post",
						data:{
							userid:function(){
								return $("#userid").val();
							}
						}
					}
				},
				password:{
					required:true,
					validPwd:true,
					//validpwdLetters:true
				},
				confirm_password:{
					required:true,
					validPwd:true,
					//validpwdLetters:true,
					equalTo:"#password"
				},
				name:{
					required:true,
					minlength:2
				},
				gender:{
					required:true,
					minlength:1
				},
				email:{
					required:true,
					validEmail:true
				}
			},
			messages:{
				userid:{
					required:"아이디는 필수요소 입니다.",
					remote:"아이디가 중복ㅋ"
				},
				password:{
					required:"비밀번호는 필수요소 입니다."
				},
				confirm_password:{
					required:"비밀번호는 필수요소 입니다.",
					equalTo:"이전 비밀번호와 다릅니다."
				},
				name:{
					required:"이름은 필수요소 입니다."
				},
				gender:{
					required:"성별을 확인해주세요.",
				},
				email:{
					required:"이메일은 필수요소 입니다."
				}
			}
		});
	});
$.validator.addMethod("validId",function(value){
	var regId=/^[a-zA-Z0-9]{5,12}$/;
	return regId.test(value);
},"아이디는 영문 소문자,대문자,숫자를 포함하여 5~12자리 사이로 입력해야합니다");
$.validator.addMethod("validPwd", function(value){
	var regPwd=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
	return regPwd.test(value);
},"비밀번호는 숫자와 영문자, 특수문자의 조합으로 8~15자리를 사용해야 합니다.");
$.validator.addMethod("validEmail", function(value){
	var regEmail=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return regEmail.test(value);
},"이메일 형식을 확인해주세요.");