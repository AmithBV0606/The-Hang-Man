const HEAD = (
    <div 
        style={{
            width:"40px",
            height:"40px",
            border: "5px solid black",
            borderRadius:"100%",
            position:"absolute",
            top:"50px",
            right: "-23px"
        }}
    />
)

const BODY = (
    <div 
        style={{
            width:"5px",
            height:"80px",
            background:"black",
            position:"absolute",
            top:"98px",
            right: 0
        }}
    />
)

const RIGHT_ARM = (
    <div 
        style={{
            width:"80px",
            height:"5px",
            background:"black",
            position:"absolute",
            top:"150px",
            right: "-80px",
            rotate:"-30deg",
            transformOrigin:"left bottom"
        }}
    />
)

const LEFT_ARM = (
    <div 
        style={{
            width:"80px",
            height:"5px",
            background:"black",
            position:"absolute",
            top:"150px",
            right: "5px",
            rotate:"30deg",
            transformOrigin:"right bottom"
        }}
    />
)

const RIGHT_LEG = (
    <div 
        style={{
            width:"90px",
            height:"5px",
            background:"black",
            position:"absolute",
            top:"170px",
            right: "-85px",
            rotate:"60deg",
            transformOrigin:"left bottom"
        }}
    />
)

const LEFT_LEG = (
    <div 
        style={{
            width:"90px",
            height:"5px",
            background:"black",
            position:"absolute",
            top:"170px",
            right: 0,
            rotate:"-60deg",
            transformOrigin:"right bottom"
        }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberofGuesses: number
}

function HangmanDrawing({numberofGuesses} : HangmanDrawingProps) {
  return (
    <div style={{ position: "relative"}}>
        {/* The Body Part :  */}
        {BODY_PARTS.slice(0, numberofGuesses)}

        {/* The Rope */}
        <div 
            style={{
                height:"50px", 
                width:"5px",
                background:"black",
                position: "absolute",
                top: 0,
                right: 0
            }}
        />

        {/* Hanging Stand(Top part) */}
        <div 
            style={{
                height:"5px", 
                width:"200px",
                background:"black",
                marginLeft:"123px"
            }}
        />

        {/* Pole */}
        <div 
            style={{
                height:"300px", 
                width:"5px",
                background:"black",
                marginLeft:"123px"
            }}
        />

        {/* Base */}
        <div 
            style={{
                height: "5px", 
                width: "250px", 
                background:"black"
            }}
        />
    </div>
  )
}

export default HangmanDrawing