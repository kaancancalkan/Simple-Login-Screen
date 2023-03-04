sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("login.screen.controller.Main", {
            onInit: function () {

               
            },
            onButtonClick: function(){
                var oUser = this.getView().byId("user").getValue();
                var oPsw =  this.getView().byId("psw").getValue();


                if (oUser==="admin" && oPsw==="12345"){
                    sap.m.MessageToast.show("Login Success") 
                }
                else{
                    sap.m.MessageToast.show("Check Your Username or Password  ")
                }
            }
        });
    });
