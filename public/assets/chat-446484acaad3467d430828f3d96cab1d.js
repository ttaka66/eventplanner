(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};this.ChatClass=function(){function n(t,n){this.disconnectWebsocket=e(this.disconnectWebsocket,this),this.receiveNotification=e(this.receiveNotification,this),this.sendNotification=e(this.sendNotification,this),this.bindEvents=e(this.bindEvents,this),this.dispatcher=new WebSocketRails(t,n),this.event_id=$("#chat").data("event"),this.send_user_name=$("#chat").data("username"),this.channel=this.dispatcher.subscribe(""+this.event_id),console.log(t),console.log(this.channel),this.dispatcher.on_open=function(t){return console.log("Websocket\u306e\u63a5\u7d9a\u304c\u3067\u304d\u307e\u3057\u305f: ",t)},this.bindEvents()}return n.prototype.bindEvents=function(){$("#chat").on("ajax:success",this.sendNotification),this.channel.bind("new_message",this.receiveNotification)},n.prototype.sendNotification=function(e,n){var i,s,o,a,c;if($("#msgbody").val(""),console.log("ajaxSuccess"),n.id)return a={name:this.send_user_name,channel_name:this.channel.name},console.log(a),this.channel.trigger("new_message",a);for(console.log("\u6587\u5b57\u6570\u30a8\u30e9\u30fc"),c=[],s=0,o=n.length;o>s;s++)i=n[s],c.push(t(i,"alert-danger"));return c},n.prototype.receiveNotification=function(e){return console.log("new comment received"),t(e.name+"\u3055\u3093\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u3089\u308c\u307e\u3057\u305f","alert-info"),$("#chat_area").load("/events/"+this.event_id+"/comments")},n.prototype.disconnectWebsocket=function(){return this.dispatcher.disconnect(),console.log("WebSocket\u63a5\u7d9a\u3092\u7d42\u4e86\u3057\u307e\u3057\u305f")},n}(),t=function(t,e){var n,i;return i=$("<div>").addClass("alert alert-dismissible "+e),n=$("<button>").addClass("close").attr({type:"button","data-dismiss":"alert","aria-label":"\u9589\u3058\u308b"}).append($("<span>").attr("aria-hidden","true").text("\xd7")),i.append(n).append(t),$(".add_alert").append(i)},$(function(){return console.log("\u8d77\u52d5\u78ba\u8a8d"),window.chatClass=new ChatClass($("#chat").data("uri")+"/websocket",!0)})}).call(this);