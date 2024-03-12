// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract ChatApp{
    //user structure 
    struct user{
        string name;
        friend[] friendList;
    }
    struct friend{
        address pubkey;
        string name;
    }
    struct message{
        address sender;
        uint256 timestamp;
         string msg;
    }
    struct AllUserStruct{
        string name;
        address accuntAddress;
    }
    AllUserStruct[] getAllUsers;
    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessage;
    function checkUserExist(address pubkey)public  view  returns(bool){
        return bytes(userList[pubkey].name).length>0;
    }
    function createAccount(string calldata name) external  {
        require( checkUserExist(msg.sender)==false, "This user already exist");
        require(bytes(name).length>0, "Username cannot be empty");
        userList[msg.sender].name=name;
        getAllUsers.push(AllUserStruct(name,msg.sender));
    }
    function getUserName(address pubkey)external  view  returns (string memory){
        require(checkUserExist(pubkey),"this user is not register");
        return  userList[pubkey].name;
    }
    function addFriend(address friend_key,string calldata name)external {
      require(checkUserExist(msg.sender),"First create your account");
      require( checkUserExist(friend_key),"this user is not register");
      require(msg.sender!=friend_key,"user cannaot add friend as themself as friend");
      require(checkAlreadyFriend(msg.sender,friend_key),"you already my friend");
      _addFriend(msg.sender, friend_key, name);
      _addFriend(msg.sender,friend_key,userList[msg.sender].name);
    }
    function checkAlreadyFriend(address pubkey1, address pubkey2)internal view returns(bool){
        if(userList[pubkey1].friendList.length>userList[pubkey2].friendList.length){
            address tmp=pubkey1;
            pubkey1=pubkey2;
            pubkey2=tmp;
        }
        for(uint256 i=0 ; i<userList[pubkey1].friendList.length;i++){
            if(userList[pubkey1].friendList[i].pubkey==pubkey2) return true;
        }
        return false;
    }
    function _addFriend(address me, address friend_key, string memory name)internal {
        friend memory newFriend= friend(friend_key,name);
        userList[me].friendList.push(newFriend);
    }
    function getMyFriendList()internal  view  returns (friend[] memory){
        return  userList[msg.sender].friendList;
    }
    function _getChatCode(address pubkey1,address pubkey2) internal pure  returns (bytes32){
    if(pubkey1<pubkey2){
      return  keccak256(abi.encodePacked(pubkey1,pubkey2));
    }else return keccak256(abi.encodePacked(pubkey2,pubkey1));
    } 
    function sendMessage(address friend_key,string calldata _msg) external {
        require( checkUserExist(msg.sender),"*Create an account First");
        require( checkUserExist(friend_key),"User is not register");
        require(checkAlreadyFriend(msg.sender, friend_key),"You are not friend with the give user");

        bytes32 chatCode=_getChatCode(msg.sender, friend_key);
        message memory newMsg =message(msg.sender,block.timestamp, _msg);
        allMessage[chatCode].push(newMsg);
    }
    function readMessage(address friend_key) external view  returns(message[] memory){
        bytes32 chatCode=_getChatCode(msg.sender, friend_key);
        return  allMessage[chatCode];
    }
    function getAllAppUsers()public  view returns(AllUserStruct[] memory){
        return getAllUsers;
    }
}