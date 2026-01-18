// Smithery build configuration
// https://smithery.ai/docs/build/project-config

/** @type {import('@smithery/cli').SmitheryConfig} */
export default {
    build: {
        // Mark these packages as external (don't bundle them)
        external: [
            "@modelcontextprotocol/sdk",
            "@modelcontextprotocol/sdk/*",
            "zod",
            "adm-zip",
            "glob",
            "minimatch"
        ]
    }
};
