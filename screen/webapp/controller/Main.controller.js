sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("login.screen.controller.Main", {
      onInit: function () {},
      onButtonClick: function () {
        var oUser = this.getView().byId("user").getValue();
        var oPsw = this.getView().byId("psw").getValue();
        var userData = [
          {
            userName: "admin",
            password : "1235",
          },
          {
            userName: "user",
            password : "1231",
          },
          {
            userName: "man",
            password : "1230",
          },
        ];
        let bool = false;
        for(let i = 0 ; i < userData.length; i++){
            if(oUser === userData[i].userName && oPsw === userData[i].password){
                   bool = true 
            }

        }
        if(bool){
            sap.m.MessageToast.show("Login Success");
        }
        else{
            sap.m.MessageToast.show("Check Your Username or Password  "); 
        }
        // if (oUser === "admin" && oPsw === "12345") {
        //   sap.m.MessageToast.show("Login Success");
        // } else {
        //   sap.m.MessageToast.show("Check Your Username or Password  ");
        // }
      },
    });
  }
);
