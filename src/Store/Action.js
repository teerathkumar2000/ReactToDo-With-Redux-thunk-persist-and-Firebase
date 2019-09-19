import firebase from '../Config/Firebase/Firebase'


let database = firebase.database().ref('/')



// getData 

const getData = () => {
    return  dispatch => {
        dispatch({
            type: "empty"
        })
         database.child('todos').on('child_added', (res) => {
            let data = res.val()
            data.id = res.key
            dispatch({ type: 'allData', payload: data })
        })

    }

}



// Add todo 
const addTodo = (content) => {
    if (!content) {
        alert("add value")
        return async dispatch => {
            dispatch({
                type: "err"
            })
        }
    }
    else {
        let obj = {
            name: content,
            edit: true
        }
        return async dispatch => {
            await database.child(`todos`).push(obj).then(
                dispatch({ type: 'add' })
            )
        }
    }

}


// EDIT todo 

const editTodo = (ind, val) => {
    return async dispatch => {

        await database.child(`todos/${val.id}`).update({ edit: false }).then(
            dispatch({ type: 'edit', payload: ind })
        )
    }


    // return {
    //     type: 'edit',
    //     payload: ind,
    // }

}



// cancel
const cancelUpdate = (ind, val) => {

    return async dispatch => {
        await database.child(`todos/${val.id}`).update({ edit: true }).then(
            dispatch({
                type: 'cancel',
                payload: ind
            })
        )
    }

}


const addUpdate = (updateval, ind, val) => {
    console.log(updateval)
    let obj = {
        name: updateval,
        edit: true,
        id: val.id
    }
    return async dispatch => {
        await database.child(`todos/${val.id}`).set(obj).then(
            dispatch({
                type: 'update',
                payload: {
                    obj,
                    ind
                }
            })
        )
    }

}

// Add todo 


const deleteTodo = (val, ind) => {
    return async dispatch => {
        await database.child(`todos/${val.id}`).remove().then(
            dispatch({
                type: 'delete',
                payload: ind
            })
        )
    }
}

export {
    addTodo,
    editTodo,
    deleteTodo,
    cancelUpdate,
    addUpdate,
    getData
}