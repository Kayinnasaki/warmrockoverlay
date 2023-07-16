import './SBDefault.css'
import TextFit from 'textfit'
import { useEffect } from 'react'

const SBDefault = ({ board }) => {
    
    useEffect(() => {
        fit()
    })

    function fit() {
        TextFit(document.getElementsByClassName('p1name'), {minFontSize:10, maxFontSize: 36})
        TextFit(document.getElementsByClassName('p2name'), {minFontSize:10, maxFontSize: 36})
        TextFit(document.getElementsByClassName('title'), {minFontSize:10, maxFontSize: 28,alignHoriz: true, alignVert: true, multiLine: true})
    }

    return (
    <div className="overlayDefault">
        <div id="p1name" className="p1name">{board.p1name}</div>
        <div id="p2name" className="p2name">{board.p2name}</div>

        <div id="p1score" className="p1score">{board.p1score}</div>
        <div id="p2score" className="p2score">{board.p2score}</div>

        <div id="p1pro" className="p1pro">{board.p1pronouns}</div>
        <div id="p2pro" className="p2pro">{board.p2pronouns}</div>

        <div className="title">{board.title}</div>
    </div>
)}
export default SBDefault