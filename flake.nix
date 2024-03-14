{
  description = "personal website, blog, and jailbreak tweak repo";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
          system = system;
      };
    in {
        # activate with `nix develop`
        devShells.${system}.default = pkgs.mkShell {
            buildInputs = with pkgs; [
                hugo
                nodejs_21
            ];
        };

        shellHook = '' 
        '';
    };

}
