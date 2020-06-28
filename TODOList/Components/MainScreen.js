import React from 'react';
import {FlatList,View,Text,TextInput, TouchableOpacity} from "react-native";
import styles from "./Style";
import DeleteIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EditIcon from "react-native-vector-icons/FontAwesome";
import BackIcon from "react-native-vector-icons/Ionicons";
import {connect} from "react-redux";
import {deleteitem,additem,edititem} from "../src/actions/index"
class MainScreen extends React.Component{
constructor(props){
    super(props);
    
    this.state = {
        item: null,
        id : 0,
        isedit:false,
        isAdd:false,
    }
    
}


onElevate(index){
    this.setState({
        id:this.state.id===0 ? index : 0, 
        isAdd:false,
        isedit:false,
    })
}



onDelete(index){
    return(
    <DeleteIcon style={styles.deleteIcon} name="delete" onPress={()=>this.props.delete(index)} />
    )
}

editItem(){
    this.setState({
        isedit:true,
    })
}

onEdit(index){
    return(
        <EditIcon  style={styles.editIcon} name="edit" onPress={()=>{this.editItem(index)}}/>
        )
}

onback(){
    this.setState({
        isedit:false,
        id:0,
    })
}



onshow(item){
    if(this.state.isedit && this.state.id === item.key){ 
                return (
                    <View style={ styles.alignItems3}>
                        <BackIcon style={styles.backIcon} name={"md-arrow-back"} onPress={()=>{this.onback()}} />
                        <TextInput 
                        style={styles.input}
                            value={this.state.item}
                        placeholder='Item'
                            onChangeText={(item) => this.setState({ item })}
                        />
                    <TouchableOpacity onPress={() => {

                        if (this.state.item === null) {
                            alert("Name of item is required ");
                        } else {

                        this.props.edit(this.state.item,item.key)
                        this.setState({
                            isedit:false,
                            item:null,
                            id:0
                        })

                    }
                }}>
            <View style={styles.customButton}>
                <Text  >  Add</Text>
            </View>
            </TouchableOpacity>
            </View>
        ); 
        }
    else{
        return (
            <View style={ this.state.id === item.key? styles.alignItems2 :  styles.alignItems1}>
    
    { this.state.id ===item.key?this.onDelete(item.key):null}
    <TouchableOpacity onPress={()=>{this.onElevate(item.key)}} >
        <View style={styles.textView}>
        <Text style={styles.itemView} >{item.name}</Text>
        </View>
        </TouchableOpacity>
        { this.state.id ===item.key?this.onEdit(item.key):null}
    </View>    
    );
}
}

onSubmit(){
this.setState({
    isAdd:true,
    id:0,
    isedit:false,
})
}

onAddback(){
this.setState({
    isAdd:false,
})
}



onShowAdd(){
if(this.state.isAdd){
return(
    <View style={ styles.alignItems3}>
        <BackIcon style={styles.backIcon} name={"md-arrow-back"} onPress={()=>{this.onAddback()}} />
            <TextInput 
            style={styles.input}
            value={this.state.item}
            placeholder='Item'
            onChangeText={(item) => this.setState({ item })}
            />
        <TouchableOpacity onPress={() => {

        if (this.state.item === null) {
            alert("Name of item is required ");
        } 
        else{
            this.props.add(this.state.item)
            this.setState({
                isAdd:false,
                item:null})

            } 
        }}>
        <View style={styles.customButton}>
            <Text>  Add</Text>
        </View>
    </TouchableOpacity>
        </View>
)
}
}


render(){ 
    console.log(this.props.items);
    return(
<View style={styles.container}>
    
    <View style={styles.setHeading}>
        <Text style={styles.title}>TODOList</Text>
        <View style={styles.buttonView}>
        <Text style={styles.button} onPress={()=>{this.onSubmit()}}>+</Text>
        </View>
    </View>
    {this.onShowAdd()}
    <View style={styles.line} />
    <FlatList 
    data={this.props.items}
    keyExtractor={(item)=>(item.key).toString()}
    renderItem={({item})=>(  
        console.log("hi",item),
        this.onshow(item)  
    )}
    />
</View>
    )
}
} 


const mapStateToProps = (state) => {
return{
    items: state.itemReducer.itemList
}
}



const mapDispatchToProps = (dispatch) =>{
    return{
        add:(item) => dispatch(additem(item)),
        delete: (key) => dispatch(deleteitem(key)),
        edit:(item,key) => dispatch(edititem(item,key)),
    }
}   

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);