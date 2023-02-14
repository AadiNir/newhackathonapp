// SPDX-License-Identifier: 0BSD
pragma solidity 0.8.18;


contract microcase{

    event share_bought(uint buyer_id,uint quant_bought,uint shares_left);
     
    uint sharequantity=100;

    struct share{
        string name;
        uint price;
        uint available_shares;

    }

    share s1;

    mapping(address=>User) public users;

    struct User{
        uint id;
        uint total_shares_owned;

    }


    function buy_share(uint num) public payable {
        require(num <= s1.available_shares, "Error: insufficient shares available!");
        require(msg.value >= s1.price * num, "Error: insufficient funds in account");

        s1.available_shares -= num;
        users[msg.sender].total_shares_owned += num;

        payable(msg.sender).transfer(s1.price * num);

        emit share_bought(users[msg.sender].id,num,s1.available_shares);
    }

    function init_share(string memory _name, uint _price) public {
        require(s1.available_shares == 0, "Error: shares have already been initialized");
        s1.name = _name;
        s1.price = _price;
        s1.available_shares = sharequantity;
    }

}
