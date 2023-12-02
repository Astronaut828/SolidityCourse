# Hardhat Security

This part of the course is to help understand basic security and some fundamentals of auditing.

- [Hardhat Security](#hardhat-security)
- [What is an Audit?](#what-is-an-audit)
- [Process](#process)
- [Resources](#resources)
  - [Tools](#tools)
  - [Games](#games)
  - [Blogs](#blogs)
  - [Audit Examples:](#audit-examples)
  - [Articles](#articles)

# What is an Audit?

An audit is a security focused code review for looking for issues with your code. 

# Process

An auditors process looks like this:

1. Run tests
2. Read specs/docs
3. Run fast tools (like slither, linters, static analysis, etc)
4. Manual Analysis
5. Run slow tools (like echidna, manticore, symbolic execution, MythX)
6. Discuss (and repeat steps as needed)
7. Write report ([Example report](https://github.com/transmissions11/solmate/tree/main/audits))

Typically, you organize reports in a chart that looks like this:


![impact image](images/impact.png)


# Resources

These are some of the best places to learn even MORE about security:

PRs welcome to improve the list.

## Tools

-   [Slither](https://github.com/crytic/slither)
    -   Static analysis from Trail of Bits.
-   [Echidna](https://github.com/crytic/echidna)
    -   Fuzzing from Trail of Bits.
-   [Manticore](https://github.com/trailofbits/manticore)
    -   Symbolic execution tool from Trail of Bits.
-   [MythX](https://mythx.io/)
    -   Paid service for smart contract security.
-   [Mythrill](https://github.com/ConsenSys/mythril)
    -   MythX free edition.
-   [ETH Security Toolbox](https://github.com/trailofbits/eth-security-toolbox)
    -   Script to create docker containers configured with Trail of Bits security tools.
-   [ethersplay](https://github.com/crytic/ethersplay)
    -   ETH Disassembler
-   [Consensys Security Tools](https://consensys.net/diligence/tools/)
    -   A list of Consensys tools.

## Games

-   [Ethernaut](https://ethernaut.openzeppelin.com/) (This is a must play!)
-   [Damn Vulnerable Defi](https://www.damnvulnerabledefi.xyz/) (This is a must play!)

## Blogs

-   [rekt](https://rekt.news/)
    -   A blog that keeps up with all the "best" hacks in the industry.
-   [Trail of bits blog](https://blog.trailofbits.com/)
    -   Learn from one of the best auditors in the space.
-   [Openzeppelin Blog](https://blog.openzeppelin.com/)
    -   Another blog of one of the best auditors in the space.

## Audit Examples:
- [Openzeppelin](https://blog.openzeppelin.com/fei-audit-2/)
- [Sigma Prime](https://tracer.finance/radar/sigma-prime-audit/)
- [Trail of Bits](https://alephzero.org/blog/trail-of-bits-audit-security/)

## Articles

-   [Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)
    -   Consensys blog on security vulnerabilities. Also [check out their tools.](https://consensys.net/diligence/tools/)
-   [Chainlink X Certik Blog on Security](https://www.certik.com/resources/blog/technology/top-10-defi-security-best-practices)
    -   I helped write this. 😊
-   [More attacks](https://consensys.github.io/smart-contract-best-practices/attacks/denial-of-service/)
