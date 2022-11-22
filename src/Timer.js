import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 59,
        seconds: 59,
        hours: 23
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes, hours } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if(hours > 0){
                        this.setState(({ hour }) => ({
                            hours: hour - 1,
                            minutes: 59,
                            seconds: 59
                        }))
                    }else{
                        clearInterval(this.myInterval)
                    }
  
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds, hours } = this.state
        return (
            <div>
                {minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}