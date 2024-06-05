# Rest API Plan (\* 현재 우리에게 필요한 페이지)

# Basic Router (\*Before)

/ => Hoem
/join => Join
/login => Login
/search => Search

# User Router

/edit-user => Edit User
/delete-user => Delete User

# Platform

/watch-video => Watch Video
/edit-video => Edit Video
/delete-video => Delete Video

# Basic Router (\*After)

/ => Hoem
/join => Join
/login => Login
/search => Search
=> Global Router

/user/edit => Edit User
/users/delete => Delete User

/video/watch => Watch Video
/video/edit => Edit Video
/video/delete => Delete Video
/video/comments => Comments on a Video
/video/comments/delete => Delete Comments on a Video
=> Root Router

=> Final

# 유튜브 플랫폼 만들어서 서버 관리

/ => Home
/join => Join
/login => Login
/search => Search

/user:id => see user
/user/logout => log out
/user/edit => Edit user Profile
/user/delete => Delete user profile

/video/:id => see video
/video/:id/edit => Edit video
/video/:id/delete => Delete video
/video/upload => Upload video
