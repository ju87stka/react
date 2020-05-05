import {create} from 'react-test-renderer'
import React from "react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test("status from props should be in the state", ()=>{
        const component=create(<ProfileStatus  statusInputRef="Igor"/>)
        const instance=component.getInstance()
        expect(instance.state.status).toBe("Igor");
    })
    test("span should be displayed", ()=>{
        const component=create(<ProfileStatus  statusInputRef="Igor"/>)
        const instance=component.root
        let span=instance.findByType("span")
        expect(span).not.toBeNull();
    })
    test("span should contain correct status", ()=>{
        const component=create(<ProfileStatus  statusInputRef="Igor"/>)
        const instance=component.root
        let span=instance.findByType("span")
        expect(span.children[0]).toBe("Igor");
    })
    test("input should be displayed in edit mode", ()=>{
        const component=create(<ProfileStatus  statusInputRef="Igor"/>)
        const instance=component.root
        let span=instance.findByType("span")
        span.props.onDoubleClick()
        let input=instance.findByType("input")
        expect(input.props.value).toBe("Igor");
    })


})

