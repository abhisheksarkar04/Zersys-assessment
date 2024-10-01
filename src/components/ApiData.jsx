import React from 'react'

const ApiData = ({data}) => {
  return (
    <>
      {
        data.map((newUser)=>{
            const{id,name,username,email,address,phone,website,company} = newUser;

            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    {/* <td>{username}</td>
                    <td>{email}</td>
                    <td>{address.city}</td>
                    <td>{phone}</td>
                    <td>{website}</td>
                    <td>{company.name}</td> */}
                </tr>
            )
        })
      }
    </>
  )
}

export default ApiData
