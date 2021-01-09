import React from 'react'
import './Depiction.css'

function Changelog(props) {
    const { changelog } = props

    let versions = []
    let changes = []

    Object.keys(changelog).forEach(version => {
        versions.push(version)
        changes.push(changelog[version])
    })


    return (
        <div class="tweak-description">
            <ul style={{listStyleType:"none"}}>
                {versions.map((version) => (
                    <li>
                        {version}
                        <ul>
                        {changelog[version].map((change) => (
                            <li>
                                {change}
                            </li>
                        ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Changelog
