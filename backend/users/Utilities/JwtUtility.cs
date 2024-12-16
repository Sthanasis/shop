using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

public class JwtUtility
{
    public string GenerateJwtToken(IdentityUser user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes("6f15d8251769e35438a05b187c94e1cd71244477efb081edf5b5d3f91a027d2f3006870d4c14867e7847a4a2f3ac68aada6fe5ad23ab2ea3f5d42cce0b85e05da61adf4a19c438cc08e4fbdf3e17c3e0cbc76cb1f3d192e166ad4d7cf81d80993b4e78f6bb6852adae8c0d1f5f81adb1107f2073170164ee950b5510948cd8505f42fd4f8a3dc389634918e131157a2583f1b33a6b91c751a12ed3b84d7eddfbc18f86d45374c074c529e5325bdd3f062fc9c135b4f7718136c10207b615453e5b7a50ca2f1d3493c4b99624b6e3725ba9168f572c5648d68203aa704dac3f22af997c375113820acd9546297185f0b960051741ec1e5b74da57ebbefca03e9d");
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(
            [
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Name, user.UserName!)
        ]),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    public static long GetTokenExpirationTime(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var jwtSecurityToken = handler.ReadJwtToken(token);
        var tokenExp = jwtSecurityToken.Claims.First(claim => claim.Type.Equals("exp")).Value;
        var ticks = long.Parse(tokenExp);
        return ticks;
    }

    public static bool CheckTokenExpired(string token)
    {
        var tokenTicks = GetTokenExpirationTime(token);
        var tokenDate = DateTimeOffset.FromUnixTimeSeconds(tokenTicks).UtcDateTime;

        var now = DateTime.Now.ToUniversalTime();

        var valid = tokenDate >= now;

        return valid;
    }
}