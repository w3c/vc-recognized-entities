# Generate RDFS vocabulary files

The script in the directory generates RDFS vocabulary files in JSON and Turtle formats, plus a human readable HTML file, based on a simple vocabulary definition in a YAML file. This is done using the [yml2vocab](https://github.com/w3c/yml2vocab); more details about the script can also be found in the [yml2vocab readme file](https://github.com/w3c/yml2vocab).



## Core content of the directory

- `Readme.md`: this file.
- `vocabulary.yml`: the core vocabulary specification. _Any change on the vocabulary must be made by modifying this file;_ see the separate [description](https://github.com/w3c/yml2vocab) of the underlying YAML format.
- `template.html`: an HTML template file used by the script; it is the skeleton of the final HTML format based on [ReSpec](https://respec.org/docs/). If the file is modified, care should be taken not to change the core structure and the various, possibly empty, HTML elements with `@id` values. The script fills those elements with content when generating the `vocabulary.html` file (and removes any sections that remain empty after processing).

## Generating the vocabulary files

The simplest way of running the script can be done via:

```sh
deno run -A jsr:@iherman/yml2vocab/cli -c -v vocabulary.yml -t template.html
```

Using [`deno`](https://deno.land). Alternatively, the package can be downloaded and installed from [npm](https://www.npmjs.com/package/yml2vocab) and run via `nodejs`.

Running this command will generate:

- `vocabulary.html`: human readable version of the vocabulary
- `vocabulary.jsonld`: the formal RDFS vocabulary in JSON-LD
- `vocabulary.ttl`: the formal RDFS vocabulary in Turtle
- `vocabulary.context.jsonld`: a JSON-LD `@context` file for the vocabulary

> [!NOTE]
> Eventually, the generation process will be folded into a github action and will become invisible. At that point, only the yml and the template files remain relevant.
>
