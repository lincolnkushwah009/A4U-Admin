import React, { useState, useEffect } from 'react'

export default function CreatePackage() {

    const [name, setName] = useState()
    const [packageInfo, setPackageInfo] = useState(
        [
            {
                description: "dfasdfsdaf",
                amount: 200,
                id:1
            },
            {
                description: "dfasdfsdaf",
                amount: 200,
                id:2
            },
            {
                description: "dfasdfsdaf",
                amount: 200,
                id:3
            }
        ]
    )

    const removeFormFields = (i) => {
        packageInfo.splice(i, 1);
        setPackageInfo(packageInfo)
        console.log(packageInfo,"Remove",i)


    }

    let addFormFields = () => {
        setPackageInfo([...packageInfo, { description: "", amount: "" }])
        console.log(packageInfo,"add")
    }

    const submit = () => {
        console.log(
            name, "Name"
        )
    }

    useEffect(() => {
console.log("Should Render")
    }, [removeFormFields])

    return (
        <div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label >Package Name</label>
                    <input type="Text" class="form-control" id="PackageName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Package Name" />
                </div>

            </div>

            <div className="packageInfo">
                <div >


                </div>
                {packageInfo.map((packageInfo, index) => (
                    <div >
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="description">Description</label>
                                <input name="description" type="text" class="form-control" id="description" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">Amount</label>
                                <input type="text" name="amount" class="form-control" id="amount" />

                            </div>
                            <div class="form-group col-md-1 " style={{ paddingTop: "30px" }}>
                                <button type="submit" class="btn btn-danger" onClick={() => removeFormFields(index)} >Remove</button>
                            </div>

                        </div>

                    </div>

                ))}
            </div>



            <button type="submit" class="btn btn-primary" onClick={() => addFormFields()} style={{ margin: "20px" }} >ADD</button>

            <button type="submit" class="btn btn-primary" onClick={submit}>Create</button>
        </div>
    )
}


// onClick={() => this.removeFormFields(index)}