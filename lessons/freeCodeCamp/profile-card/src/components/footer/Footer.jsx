import githubLogo from '../../assets/icons8-github.svg'

import linkedinLogo from '../../assets/icons8-linkedin.svg'

export default function Footer() {
    return <div id="footer">
        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Github Logo" /></a>

        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn logo" /></a>
    </div>
}