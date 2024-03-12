 const ChatAppABI =[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "friend_key",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "addFriend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "pubkey",
            "type": "address"
          }
        ],
        "name": "checkUserExist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "createAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllAppUsers",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "accuntAddress",
                "type": "address"
              }
            ],
            "internalType": "struct ChatApp.AllUserStruct[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "pubkey",
            "type": "address"
          }
        ],
        "name": "getUserName",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "friend_key",
            "type": "address"
          }
        ],
        "name": "readMessage",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "msg",
                "type": "string"
              }
            ],
            "internalType": "struct ChatApp.message[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "friend_key",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_msg",
            "type": "string"
          }
        ],
        "name": "sendMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]


  export default {
    abi: ChatAppABI
  };