import React, { useEffect } from 'react'
import './Depiction.css'

function Changelog(props) {
    const { changelog } = props

    let versions = []
    let changes = []

    Object.keys(changelog).forEach(version => {
        versions.push(version)
        changes.push(changelog[version])
    })
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div class="tweak-description">
            <h1>Changelog</h1>
            <ul style={{ listStyleType: "none" }}>
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
